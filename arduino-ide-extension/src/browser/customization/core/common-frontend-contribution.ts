import { injectable } from 'inversify';
import { MenuModelRegistry } from '@theia/core/lib/common/menu';
import { CommonFrontendContribution as TheiaCommonFrontendContribution, CommonCommands } from '@theia/core/lib/browser/common-frontend-contribution';

@injectable()
export class CommonFrontendContribution extends TheiaCommonFrontendContribution {

    registerMenus(registry: MenuModelRegistry): void {
        super.registerMenus(registry);
        for (const command of [
            CommonCommands.SAVE,
            CommonCommands.SAVE_ALL,
            CommonCommands.CUT,
            CommonCommands.COPY,
            CommonCommands.PASTE,
            CommonCommands.COPY_PATH,
            CommonCommands.FIND,
            CommonCommands.REPLACE
        ]) {
            registry.unregisterMenuAction(command);
        }
    }

}
