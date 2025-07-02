const projects = {
    tarefaAPI: {
      image: 'img/tarefaAPI.png',
      title: 'API Rest',
      description: 'Projeto de gerenciamento de tarefas, desenvolvido como uma versão básica de uma API REST com operações CRUD. Utilizei Java, Spring Boot, JPA e PostgreSQL para estruturar o backend.',
     // link: 'https://github.com/Danielsalesds'
    },
    mobileApp: {
      image: 'img/club-app.jpeg',
      title: 'Mobile App',
      description: 'Aplicativo mobile para agendamento de horários em um clube de quadras esportivas. Desenvolvido utilizando Flutter para a interface e Firebase como backend. Atuei como desenvolvedor full stack, com foco principal no front-end e na experiência do usuário. ',
      link: 'https://github.com/Danielsalesds/Sistema-de-Reservas-de-Quadra-Esportivas'
    },
    // Adicione mais projetos conforme o ID usado no onclick
  };

  function openModal(id) {
    const modal = document.getElementById('modal');
    const linkBtn = document.getElementById('modal-link');

    document.getElementById('modal-image').src = projects[id].image;
    document.getElementById('modal-title').textContent = projects[id].title;
    document.getElementById('modal-description').textContent = projects[id].description;
    

    if (projects[id].link) {
        linkBtn.href = projects[id].link;
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.href = 'https://github.com/Danielsalesds';
        //linkBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }