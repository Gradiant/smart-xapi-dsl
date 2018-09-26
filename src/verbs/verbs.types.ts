export type VerbIdChecker = (verbId: string) => boolean;

export interface VerbLike {
  id: string;
}

export type VerbChecker = <T extends VerbLike>(verbId: T) => boolean;
