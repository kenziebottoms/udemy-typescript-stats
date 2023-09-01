import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const wins = this.analyzer.run(matches);
    this.outputTarget.print(wins);
  }
}
