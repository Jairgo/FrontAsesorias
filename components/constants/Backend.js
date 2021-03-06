const ip = '10.0.2.2';
const port = 8000;
const main_endpoint = `https://becasdeploy.pythonanywhere.com`;

const endpoints = {
    notifications: (id_alumno) => `${main_endpoint}/notificaciones/${id_alumno}/`,
    horario: (id) => `${main_endpoint}/horario/${id}/`,
    materias: (id) => `${main_endpoint}/materiasimpartidas/${id}/`,
    horarioAsesorView: (id_asesor) => `${main_endpoint}/horarioAsesor/${id_asesor != undefined ? id_asesor + '/' : ''}`,
    estudiantes: () => `${main_endpoint}/estudiantes/`,
    updateEstudiantes: (id) => `${main_endpoint}/estudiantes/${id}/`,
    updatelimites: () => `${main_endpoint}/updatelimitematerias/`
};

export {
    ip, port, main_endpoint, endpoints
}
