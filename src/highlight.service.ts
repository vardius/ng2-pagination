/**
 * This file is part of the angular2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Injectable, Optional} from '@angular/core';

export class HighlightServiceConfig {
    styleName: string;
    styleValue: string;
}

@Injectable()
export class HighlightService {
    private _styleName: string = 'backgroundColor';
    private _styleValue: string = 'powderblue';

    constructor(@Optional() config: HighlightServiceConfig) {
        if (config) {
            this._styleName = config.styleName;
            this._styleValue = config.styleValue;
        }
    }

    get styleName(): string {
        return this._styleName;
    }

    get styleValue(): string {
        return this._styleValue;
    }
}
