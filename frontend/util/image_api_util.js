export const fetchAllImages = () => {
    return $.ajax({
        method: 'GET',
        url: `api/images`
    })

}

export const fetchImage = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/images/${id}`
    })
}

export const updateImage = (image) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/images/${image.id}`,
        data: {image}
    })
}