/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2022 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Settings } from "../../stores/use-setting-store";

export type SettingSection = {
  id: string;
  type?: "screen" | "switch" | "component" | "danger";
  name?: string | ((current?: unknown) => string);
  description?: string | ((current: unknown) => string);
  icon?: string;
  property?: keyof Settings;
  sections?: SettingSection[];
  component?: string;
  modifer?: (...args: unknown[]) => void;
  getter?: (...args: unknown[]) => unknown;
  useHook?: (...args: unknown[]) => unknown;
  hidden?: (current: unknown) => boolean;
  onChange?: (property: boolean) => void;
};

export type SettingsGroup = {
  name: string;
  sections: SettingSection[];
};

export type RouteParams = {
  SettingsHome: { [name: string]: string };
  SettingsGroup: SettingSection;
};
