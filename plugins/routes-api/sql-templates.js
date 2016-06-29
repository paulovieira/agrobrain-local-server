module.exports.insert = function insert(mac, readings){

    var names = Object.keys(readings);
    if(names.length===0){
        return;
    }

    var sql = `
INSERT INTO "t_raw" (
    mac, 
    name, 
    val
)
VALUES
`;

    for(var name in readings){

        sql += `
(
    '${ mac }', 
    '${ name }',
    '${ readings[name] }'
),
`;
    }
    
    // remove the comma in the tail
    sql = sql.trim().slice(0, -1);
    return sql;
};