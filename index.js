 const prompt = require('prompt-sync')();

 let alturas = [];
 
// Implementar a entrada de dados
 for (let aluno = 0; aluno < 10; aluno++) {
    var altura = parseFloat(prompt("Digite a altura: "));
    alturas.push(altura);
}
// Implementar o processamento de dados
// Fazer for dentro de for
for (let aluno = 0; aluno < 10; aluno++) {
    var contador = 0;
    
    for (var tamanho = 0; tamanho < 10; tamanho++) {
        if (alturas[aluno] > alturas[tamanho]) {
            contador = contador+1;
        }        
    }
    // Implementar a saída de dados
    console.log("aluno " + aluno + ": maior que " + contador + " aluno(s)");
}