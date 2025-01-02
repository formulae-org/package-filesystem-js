/*
Fōrmulæ filesystem package. Module for edition.
Copyright (C) 2015-2025 Laurence R. Ugalde

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

export class FileSystem extends Formulae.EditionPackage {};

FileSystem.selectionFile = function() {
	let input = document.createElement('input');
	input.type = "file";
	
	input.onchange = e => { 
		// getting a hold of the file reference
		let file = e.target.files[0];
		console.log(file);
		
		let expr = Formulae.createExpression("FileSystem.File");
		expr.set("Value", file);
		
		Formulae.sExpression.replaceBy(expr);
		Formulae.sHandler.prepareDisplay();
		Formulae.sHandler.display();
		Formulae.setSelected(Formulae.sHandler, expr, false);
		
		/*
		// setting up the reader
	 	let reader = new FileReader();
		reader.readAsText(file,'UTF-8');
		
		// here we tell the reader what to do when it's done reading...
		reader.onload = readerEvent => {
			let content = readerEvent.target.result; // this is the content!
			console.log(content);
		}
		*/
	}
	
	input.click();
};

FileSystem.setEditions = function() {
	Formulae.addEdition("FileSystem", null, "Choose file", FileSystem.selectionFile);
};
