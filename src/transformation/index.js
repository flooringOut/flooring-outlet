export const transformCategories = (categories) => {
   return categories.map((el) => {
        const id = el.sys.id;
        const fields = el.fields;
        const image = 'https:' + el.fields.image.fields.file.url;

        return {
            id,
            image,
            name: fields.name,
            slug: fields.slug,
        }
    })
}

export const transformProducts = (products) => {
    return products.map((el) => {
         const id = el.sys.id;
         const fields = el.fields;
         const image = 'https:' + el.fields.image.fields.file.url;
 
         return {
             id,
             image,
             name: fields.name,
             slug: fields.slug,
         }
     })
 }