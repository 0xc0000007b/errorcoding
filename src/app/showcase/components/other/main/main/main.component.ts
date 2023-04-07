import {Component, Input, OnInit} from '@angular/core';
import IProject from '../../../../../../assets/shared/sharable-interfaces/project.interface';
import {
  mockProjects,
  mockProjectsCSharp,
  mockProjectsPython,
  mockProjectsTwo,
} from '../../../../../../assets/shared/sharable-interfaces/mockProjects';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {SkillNode} from './interfaces/skill-node.interface';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Skills_DATA_SHARP} from './data/sharp-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  projects: IProject[] = mockProjects;

  rxProjects: IProject[] = mockProjectsTwo;
  sharpProjects: IProject[] = mockProjectsCSharp;
  pythonProjects: IProject[] = mockProjectsPython;
}
