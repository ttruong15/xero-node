/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TaxComponent } from './taxComponent';

export class TaxRate {
    /**
    * Name of tax rate
    */
    'name'?: string;
    /**
    * The tax type
    */
    'taxType'?: string;
    /**
    * See TaxComponents
    */
    'taxComponents'?: Array<TaxComponent>;
    /**
    * See Status Codes
    */
    'status'?: TaxRate.StatusEnum;
    /**
    * See ReportTaxTypes
    */
    'reportTaxType': TaxRate.ReportTaxTypeEnum;
    /**
    * Boolean to describe if tax rate can be used for asset accounts i.e.  true,false
    */
    'canApplyToAssets'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for equity accounts i.e true,false
    */
    'canApplyToEquity'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for expense accounts  i.e. true,false
    */
    'canApplyToExpenses'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for liability accounts  i.e. true,false
    */
    'canApplyToLiabilities'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for revenue accounts i.e. true,false
    */
    'canApplyToRevenue'?: boolean;
    /**
    * Tax Rate (decimal to 4dp) e.g 12.5000
    */
    'displayTaxRate'?: number;
    /**
    * Effective Tax Rate (decimal to 4dp) e.g 12.5000
    */
    'effectiveRate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "taxType",
            "baseName": "TaxType",
            "type": "string"
        },
        {
            "name": "taxComponents",
            "baseName": "TaxComponents",
            "type": "Array<TaxComponent>"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "TaxRate.StatusEnum"
        },
        {
            "name": "reportTaxType",
            "baseName": "ReportTaxType",
            "type": "TaxRate.ReportTaxTypeEnum"
        },
        {
            "name": "canApplyToAssets",
            "baseName": "CanApplyToAssets",
            "type": "boolean"
        },
        {
            "name": "canApplyToEquity",
            "baseName": "CanApplyToEquity",
            "type": "boolean"
        },
        {
            "name": "canApplyToExpenses",
            "baseName": "CanApplyToExpenses",
            "type": "boolean"
        },
        {
            "name": "canApplyToLiabilities",
            "baseName": "CanApplyToLiabilities",
            "type": "boolean"
        },
        {
            "name": "canApplyToRevenue",
            "baseName": "CanApplyToRevenue",
            "type": "boolean"
        },
        {
            "name": "displayTaxRate",
            "baseName": "DisplayTaxRate",
            "type": "number"
        },
        {
            "name": "effectiveRate",
            "baseName": "EffectiveRate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TaxRate.attributeTypeMap;
    }
}

export namespace TaxRate {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        DELETED = <any> 'DELETED',
        ARCHIVED = <any> 'ARCHIVED'
    }
    export enum ReportTaxTypeEnum {
        OUTPUT = <any> 'OUTPUT',
        INPUT = <any> 'INPUT',
        EXEMPTOUTPUT = <any> 'EXEMPTOUTPUT',
        INPUTTAXED = <any> 'INPUTTAXED',
        BASEXCLUDED = <any> 'BASEXCLUDED',
        EXEMPTEXPENSES = <any> 'EXEMPTEXPENSES',
        EXEMPTINPUT = <any> 'EXEMPTINPUT',
        ECOUTPUT = <any> 'ECOUTPUT',
        ECOUTPUTSERVICES = <any> 'ECOUTPUTSERVICES',
        ECINPUT = <any> 'ECINPUT',
        ECACQUISITIONS = <any> 'ECACQUISITIONS',
        CAPITALSALESOUTPUT = <any> 'CAPITALSALESOUTPUT',
        CAPITALEXPENSESINPUT = <any> 'CAPITALEXPENSESINPUT',
        MOSSSALES = <any> 'MOSSSALES',
        NONE = <any> 'NONE',
        GSTONIMPORTS = <any> 'GSTONIMPORTS',
        AVALARA = <any> 'AVALARA'
    }
}
