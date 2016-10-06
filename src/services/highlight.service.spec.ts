/**
 * This file is part of the ng2-pagination package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {HighlightService} from "./highlight.service";
import {Config} from "../config";

describe('HighlightService without the TestBed', () => {
    let service: HighlightService;
    beforeEach(() => {
        let config: Config = {
            styleName: 'background',
            styleValue: 'red',
            limits: []
        };
        service = new HighlightService(config);
    });

    it('#get styleName should return background', () => {
        expect(service.styleName).toBe('background');
    });

    it('#get styleValue should return red', () => {
        expect(service.styleValue).toBe('red');
    });
});
