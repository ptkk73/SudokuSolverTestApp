import { Component, OnInit } from "@angular/core";
import { SudokuTileInfo } from "../model/SudokuTileInfo";
import { Input } from "@angular/core";

@Component({
  selector: "app-sudoku-tile",
  templateUrl: "./sudoku-tile.component.html",
  styleUrls: ["./sudoku-tile.component.css"]
})
export class SudokuTileComponent implements OnInit {
  //tile: SudokuTileInfo;
  @Input() tileInfo: SudokuTileInfo;

  constructor() {
    // console.info("asdasdasd")
    // let s = new SudokuTileInfo();
    // s.officialNumber = this.tileInfo;
    // this.tile = s;
  }

  ngOnInit() {}

  getSuggestionStyle(i: number) {
    return "background-color: pink;";
  }
}
