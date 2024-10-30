function calcularmts() {
    let strkm = document.getElementById("km").value

    if (strkm === "") {
        alert("Valor en Blanco")
    } else {
        let a = parseInt(strkm)
        if (a === 0) {
            alert("El valor de los Kilometros no debe ser Cero")
        } else {
            let mts = a * 1000
            document.getElementById("metros").value = mts
        }
    }
}

function Calcularcm(){
    let strkm = document.getElementById("mts").value

    if (strkm === "") {
        alert("Valor en Blanco")
    } else {
        let a = parseInt(strkm)
        if (a === 0) {
            alert("El valor de los Kilometros no debe ser Cero")
        } else {
            let mts = a * 1000
            document.getElementById("cm").value = mts
        }
    }
}
function ftinches(){
    let strkm = document.getElementById("pies").value

    if (strkm === "") {
        alert("Valor en Blanco")
    } else {
        let a = parseInt(strkm)
        if (a === 0) {
            alert("El valor de los Kilometros no debe ser Cero")
        } else {
            let mts = a * 12
            document.getElementById("pulg").value = mts
        }
    }   
}
function yardpulg(){
    
        let strkm = document.getElementById("yardas").value
    
        if (strkm === "") {
            alert("Valor en Blanco")
        } else {
            let a = parseInt(strkm)
            if (a === 0) {
                alert("El valor de los Kilometros no debe ser Cero")
            } else {
                let mts = a * 12
                document.getElementById("pulgs").value = mts
            }
        }   
    
}

function limpiarkmmts(){
    document.getElementById("km").value=""
    document.getElementById("metros").value=""
}
function limpiarcm(){
    document.getElementById("mts").value=""
    document.getElementById("cm").value=""
}
function Cleanft(){
    document.getElementById("pies").value=""
    document.getElementById("pulg").value=""
}
function cleanyardas(){
    document.getElementById("yardas").value=""
    document.getElementById("pulgs").value=""
}