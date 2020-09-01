var data=[{ id:1, name: "lol", category:"classic", company: "kutek", description: " abc dwa trzy ", price: 200},
{ id:2, name: "sand", category:"classic", company: "areas", description: " abc dwa trzy ", price: 270},
    { id:3, name: "sonny", category:"office", company: "kutek", description: " abc dwa trzy ", price: 256.66},
    { id:4, name: "lol", category:"artistic", company: "lucide", description: " abc dwa trzy ", price: 134.78} ]

module.exports=function(){
    return {
        products: data,
        categories: [...new Set(data.map(p=> p.category))].sort(),
        orders:[]
    }
}
