import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {InfoNode, CONSTANTS} from '../properties/constants'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  $: any;
  treeControl = new NestedTreeControl<InfoNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<InfoNode>();


  constructor() { 
    this.dataSource.data = CONSTANTS.TREE_DATA;
  }
  ngOnInit() {
  }
  hasChild = (_: number, node: InfoNode) => !!node.children && node.children.length > 0;
  hasLink = (_: number, node: InfoNode) => !!node.link && node.link.length > 0;




}
