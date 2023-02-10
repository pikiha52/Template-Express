const insertOne = (table, params) => {
    const data = table.create({
        data: params
    });
    return data;
}

const findMany = (table, params) => {
    let data;
    if(params.select){
        data = table.findMany({
            select: params.select
        });
        return data;
    }
    data = table.findMany();
    return data;
}

const findUnique = (table, params) => {
    let data;
    if(params.select){
        data = table.findUnique({
            where: params.where,
            select: params.select
        });
        return data
    }
    data = table.findUnique({
        where: params
    });
    return data;
}

const findFirst = (table, params) => {
    let data;
    if(params.select){
        data = table.findFirst({
            where: params.where,
            select: params.select
        });
        return data
    }
    data = table.findFirst(params)
    return data;
}

const updateOne = (table, params) => {
    const data = table.update({
        where: {
            id: params.id
        },
        data: params.updateData
    });
    return data;
}

export { 
    insertOne,
    findMany,
    findUnique,
    findFirst,
    updateOne,
}