class Activity {
  constructor(id, title, descripcion, imgurl) {
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.imgurl = imgurl;
  }
}

class Repository {
  // Un arreglo para almacenar las actividades
  constructor() {
    this.activities = [];
    this.nextId = 1; // Inicializar el ID en 1
  }

  // Debe instanciar una actividad con los datos correspondientes y almacenarla en su arreglo
  createActivity(title, descripcion, imgurl) {
    const activity = new Activity(this.nextId++, title, descripcion, imgurl);
    this.activities.push(activity);
  }

  // Debe retornar un arreglo con todas las actividades
  getAllActivities() {
    return this.activities;
  }

  // Eliminar
  deleteActivity(idBuscado) {
    console.log(idBuscado);
    let elementoEliminado = false;
    this.getAllActivities().forEach((elemento, indice) => {
      if (elemento.id === idBuscado) {
        console.log("elemento id: " + elemento.id + " - indice: " + indice);
        this.getAllActivities().splice(indice, 1);
        elementoEliminado = true; 
      }
    });

    if (elementoEliminado){
        console.log("Elemento eliminado correctamente");
    } else {
        console.log("No se encontró ningún elemento con el ID especificado.");
    }
  }

}

const repository01 = new Repository();
repository01.createActivity("noticias", "primero", "http://www.ere.com/img01");
console.log(repository01);
console.log(repository01.getAllActivities());

const repository02 = new Repository();
repository01.createActivity("deportes", "segundo", "http://www.ere.com/img02");
console.log(repository01);
console.log(repository01.getAllActivities());

const repository03 = new Repository();
repository01.createActivity("politica", "tercero", "http://www.ere.com/img03");
console.log(repository01);
console.log(repository01.getAllActivities()); 

repository01.deleteActivity(2);
console.log("Elementos actualizados..!!");
console.log(repository01.getAllActivities());

