export const updateName = (updatedName: String) => {
    return {
        type: 'UPDATE_NAME',
        payload: updatedName,
    }
}

export const updateNameSuccess = (updatedName: String) => {
    return {
        type: 'UPDATE_NAME_SUCCESS',
        payload: updatedName,
    }
}
