import DOMInterface from './DOMInterface.js';
// import renderProjects from './renderProjects.js';

document.addEventListener('DOMContentLoaded', DOMInterface);
// document.addEventListener('DOMContentLoaded', renderProjects);


// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'deleteProjectBtn' ) {
			// event.target.parentElement.remove();
			// delete project from local storage
			let projectToDelete = event.target.parentElement.getAttribute('data-project');
			toString(projectToDelete);
			localStorage.removeItem(projectToDelete);
			console.log(localStorage.getItem('defaultProjects'));
			// console.log(localStorage.getItem('defaultProjects'), localStorage);
		};
	});


	
}

export default deleteProject;