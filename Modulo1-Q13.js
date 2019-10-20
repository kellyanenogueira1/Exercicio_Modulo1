const obj = {
    temp: 0,
    get temperatura(){return this.temp},
    set temperatura(temperatura){ 
        if(temperatura < this.temp) throw new Error("Números negativos não são permitidos!")
        this.temp = temperatura       
    }
}
obj.temperatura = -1
console.log(obj.temperatura)
