const Database = require('../database/Database.js');

module.exports = { 

    async getAll(req, res) {
        console.log(req.body);
        const d = await new Database();
        const result = await d.query(`
        SELECT  PC.COD_EMPRESA AS "Unidade",
        PC.NUM_PED AS "Nº Pedido",
        FO.RAZ_SOCIAL AS "Fornecedor",
        PC.VLR_TOTAL AS "Valor Total",
        To_Char(PC.DAT_EMISSAO, 'dd/mm/yyyy') AS "Data Emissão",
        Nvl(PC.QTD_DIAS_ENT, 0) || ' DIAS' AS "Data Entrega",
        CP.desc_cond_pgto AS "Condição de Pagamento",
        get_datas_cond_pgto((PC.DAT_EMISSAO +Nvl(PC.QTD_DIAS_ENT, 0)), pc.cod_cond_pgto) AS "Datas Previstas Pagamento"
        FROM ped_compra pc
        INNER JOIN fornecedor fo
        ON (pc.cod_fornecedor = fo.cod_fornecedor)
        INNER JOIN cond_pgto_mestre_ent CP
        ON (PC.cod_cond_pgto = CP.cod_cond_pgto)
        WHERE PC.VLR_TOTAL >= 10000 
        AND TRUNC(PC.DAT_EMISSAO) >= TO_DATE(:DATA_INICIAL, 'dd/MM/yyyy')
        AND TRUNC(PC.DAT_EMISSAO) <= TO_DATE(:DATA_FINAL, 'dd/MM/yyyy')
        `        
        , req.body);
        res.send(result);        
    }    
}



