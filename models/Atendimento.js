const conexao = require('../infraestrutura/conexao');

class Atendimento {
    
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?';

        conexao.query(sql, atendimento, (error, result) => {
            if(error) {
                console.log(error);
            } else {
                console.log(result);
            }
        });
    }

}