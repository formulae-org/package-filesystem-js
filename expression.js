/*
Fōrmulæ filesystem package. Module for expression definition & visualization.
Copyright (C) 2015-2023 Laurence R. Ugalde

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

export class FileSystem extends Formulae.ExpressionPackage {};

FileSystem.File = class extends Expression.Literal {
	getTag() { return "FileSystem.File"; }
	getName() { return "File"; }
	
	getLiteral() {
		return "🗒 " + this.file.name;
	}
	
	set(name, value) {
		if (name === "Value") {
			this.file = value;
			return;
		}
			
		super.set(name, value);
	}
	
	get(name) {
		if (name === "Value") {
			return this.file;
		}
		
		return super.get(name);
	}
};

/*
FileSystem.Directory = class extends Expression.Literal {
	getTag() { return "FileSystem.Directory"; }
	getName() { return "Directory"; }
	
	getLiteral() {
		return "📁 " + this.fileSystemDirectoryEntry.name;
	}
	
	set(name, value) {
		if (name === "Value") {
			this.fileSystemDirectoryEntry = value;
			return;
		}
			
		super.set(name, value);
	}
	
	get(name) {
		if (name === "Value") {
			return this.fileSystemDirectoryEntry;
		}
		
		return super.get(name);
	}
};
*/

FileSystem.setExpressions = function(module) {
	Formulae.setExpression(module, "FileSystem.File",      FileSystem.File);
	//Formulae.setExpression(module, "FileSystem.Directory", FileSystem.Directory);
};
