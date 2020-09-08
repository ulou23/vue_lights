var data=[{ id:1, name: "lol", category:"classic", company: "kutek", description: " abc dwa trzy ", price: 200, image:'@/assets/images/01.jpg'},
{ id:2, name: "sand", category:"classic", company: "areas", description: " abc dwa trzy ", price: 270, image:'@/assets/images/02.jpg'},
    { id:3, name: "sonny", category:"office", company: "kutek", description: " abc dwa trzy ", price: 256.66, image:'@/assets/images/03.jpg'},
    { id:4, name: "lol", category:"artistic", company: "lucide", description: " abc dwa trzy ", price: 134.78, image:"@/assets/images/04.jpg"} ]

module.exports=function(){
    return {
        products: data,
        categories: [...new Set(data.map(p=> p.category))].sort(),
        orders:[]
    }
}
