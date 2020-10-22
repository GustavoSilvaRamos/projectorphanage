const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-20.8167218",
    lng: "-49.5508522",
    name: "Lar de Amor",
    about:
      "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou  vulnerabilidade social.",
    whatsapp: "981999084",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80",
      "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1502073018433-36374b61ce42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    open_hours: "Horario de Visita das 18h ate 8h",
    open_on_weekends: "1",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente um orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');

  //deletar dado da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id='9'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id='6'"));
});
