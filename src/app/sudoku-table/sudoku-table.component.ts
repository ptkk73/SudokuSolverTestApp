import { Component, OnInit } from "@angular/core";
import { SudokuTileInfo } from "../model/SudokuTileInfo";

@Component({
  selector: "app-sudoku-table",
  templateUrl: "./sudoku-table.component.html",
  styleUrls: ["./sudoku-table.component.css"]
})
export class SudokuTableComponent implements OnInit {
  sudokuTable: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];

  tiles: any;

  constructor() {
    console.info("Hay there");
    this.tiles = this.sudokuTable.map(row => {
      return row.map(rowItem => {
        let s = new SudokuTileInfo();
        s.officialNumber = rowItem;
        return s;
      });
    });

    console.info(this.tiles);
  }

  ngOnInit() {}
}
