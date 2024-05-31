  async function Libros(){
  const url='https://potterapi-fedeperin.vercel.app/es/books' //cambiar "houses" para diferente info

fetch(url)
    .then(response=> response.json() )
    .then(data => {
        const table = document.getElementById("alicuotas");

        data.forEach((e,i) => {    //< ---  recorremos data

            let tr = document.createElement("tr"); //< ---  creamos una fila

            let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
            td.classList.add("index");
            td.innerHTML = i;
            tr.appendChild(td); //< --- Agregamos la columna en la fila

            for (p in e) {  //< ---  recorremos cada propiedad de cada elemento

                let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                td.innerHTML = e[p];

                tr.appendChild(td); //< --- Agregamos la columna en la fila

            }

            table.appendChild(tr); //< --- Agregamos la fila a la tabla

        });

    })
    .catch(err=>console.log(err))}

  async function Personajes(){
      const url='https://potterapi-fedeperin.vercel.app/es/characters' //cambiar "houses" para diferente info

      fetch(url)
          .then(response=> response.json() )
          .then(data => {
              const table = document.getElementById("alicuotas");

              data.forEach((e,i) => {    //< ---  recorremos data

                  let tr = document.createElement("tr"); //< ---  creamos una fila

                  let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
                  td.classList.add("index");
                  td.innerHTML = i;
                  tr.appendChild(td); //< --- Agregamos la columna en la fila

                  for (p in e) {  //< ---  recorremos cada propiedad de cada elemento

                      let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                      td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                      td.innerHTML = e[p];

                      tr.appendChild(td); //< --- Agregamos la columna en la fila

                  }

                  table.appendChild(tr); //< --- Agregamos la fila a la tabla

              });

          })
          .catch(err=>console.log(err))}

  async function Casas(){
      const url='https://potterapi-fedeperin.vercel.app/es/houses' //cambiar "houses" para diferente info

      fetch(url)
          .then(response=> response.json() )
          .then(data => {
              const table = document.getElementById("alicuotas");

              data.forEach((e,i) => {    //< ---  recorremos data

                  let tr = document.createElement("tr"); //< ---  creamos una fila

                  let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
                  td.classList.add("index");
                  td.innerHTML = i;
                  tr.appendChild(td); //< --- Agregamos la columna en la fila

                  for (p in e) {  //< ---  recorremos cada propiedad de cada elemento

                      let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                      td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                      td.innerHTML = e[p];

                      tr.appendChild(td); //< --- Agregamos la columna en la fila

                  }

                  table.appendChild(tr); //< --- Agregamos la fila a la tabla

              });

          })
          .catch(err=>console.log(err))}

  async function Hechizos(){
      const url='https://potterapi-fedeperin.vercel.app/es/spells' //cambiar "houses" para diferente info

      fetch(url)
          .then(response=> response.json() )
          .then(data => {
              const table = document.getElementById("alicuotas");

              data.forEach((e,i) => {    //< ---  recorremos data

                  let tr = document.createElement("tr"); //< ---  creamos una fila

                  let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
                  td.classList.add("index");
                  td.innerHTML = i;
                  tr.appendChild(td); //< --- Agregamos la columna en la fila

                  for (p in e) {  //< ---  recorremos cada propiedad de cada elemento

                      let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
                      td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
                      td.innerHTML = e[p];

                      tr.appendChild(td); //< --- Agregamos la columna en la fila

                  }

                  table.appendChild(tr); //< --- Agregamos la fila a la tabla

              });

          })
          .catch(err=>console.log(err))}