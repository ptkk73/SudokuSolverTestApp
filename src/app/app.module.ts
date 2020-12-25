import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SudokuTileComponent } from "./sudoku-tile/sudoku-tile.component";
import { SudokuTableComponent } from "./sudoku-table/sudoku-table.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SudokuTileComponent,
    SudokuTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
