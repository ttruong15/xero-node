/**
 * Xero Assets API
 * This is the Xero Assets API
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Pagination {
    'page'?: number;
    'pageSize'?: number;
    'pageCount'?: number;
    'itemCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        },
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number"
        },
        {
            "name": "itemCount",
            "baseName": "itemCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}

