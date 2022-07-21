const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
    };

    const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

function estudante(student) {  
    const arrayEntries = Object.entries(student)
    for(const skill in arrayEntries) {
     console.log(`${arrayEntries[skill][0]}, Nivel: ${arrayEntries[skill][1]}`)   
    }
}
estudante(student1)
