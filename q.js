//设备类型  新增一条记录    修改一条记录
export async function deviceTypesave(params) {
    return request(`/rs/equipmentType/save`, {
        method: 'POST',
        body: params,
    });
}

//设备类型  根据id删除一条记录
export async function deviceTypedeleteById(params) {
    return request(`/rs/equipmentType/deleteById`, {
        method: 'POST',
        body: params,
    });
}
//设备类型  查询树结构列表
export async function deviceTypequeryTreeList(params) {
    return request(`/rs/equipmentType/queryTreeList`, {
        method: 'POST',
        body: params,
    });
}
//设备类型  查询叶子节点列表（select框）
export async function deviceTypequeryLeafList(params) {
    return request(`/rs/equipmentType/queryLeafList`, {
        method: 'POST',
        body: params,
    });
}
//设备  新增一条记录    修改一条记录
export async function devicesave(params) {
    return request(`/rs/equipment/save`, {
        method: 'POST',
        body: params,
    });
}

//设备  根据id删除一条记录
export async function devicedeleteByIde(params) {
    return request(`/rs/equipment/deleteById`, {
        method: 'POST',
        body: params,
    });
}
//设备  根据条件查询设备列表（类型，编号，名称，状态，车间）；状态，车间下拉框内容
export async function devicequeryList(params) {
    return request(`/rs/equipment/queryList`, {
        method: 'POST',
        body: params,
    });
}
//deviceTypesave,deviceTypedeleteById,deviceTypequeryTreeList,deviceTypequeryLeafList,devicesave,devicedeleteByIde,devicequeryList;