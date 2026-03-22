export { maule } from './maule';
export { ohiggins } from './ohiggins';
export { nuble } from './nuble';
export { biobio } from './biobio';
export { araucania } from './araucania';
export type { RegionData, RegionFund, RegionStat } from './types';

import { maule } from './maule';
import { ohiggins } from './ohiggins';
import { nuble } from './nuble';
import { biobio } from './biobio';
import { araucania } from './araucania';
import type { RegionData } from './types';

export const allRegions: Record<string, RegionData> = {
  maule,
  ohiggins,
  nuble,
  biobio,
  araucania,
};
