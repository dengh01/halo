/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { MenuItem } from '../models';
// @ts-ignore
import { MenuItemList } from '../models';
/**
 * V1alpha1MenuItemApi - axios parameter creator
 * @export
 */
export const V1alpha1MenuItemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create v1alpha1/MenuItem
         * @param {MenuItem} [menuItem] Fresh menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1MenuItem: async (menuItem?: MenuItem, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menuitems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1MenuItem: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteV1alpha1MenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1MenuItem: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getV1alpha1MenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List v1alpha1/MenuItem
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1MenuItem: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menuitems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchV1alpha1MenuItem: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchV1alpha1MenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {MenuItem} [menuItem] Updated menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1MenuItem: async (name: string, menuItem?: MenuItem, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateV1alpha1MenuItem', 'name', name)
            const localVarPath = `/api/v1alpha1/menuitems/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V1alpha1MenuItemApi - functional programming interface
 * @export
 */
export const V1alpha1MenuItemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1alpha1MenuItemApiAxiosParamCreator(configuration)
    return {
        /**
         * Create v1alpha1/MenuItem
         * @param {MenuItem} [menuItem] Fresh menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createV1alpha1MenuItem(menuItem?: MenuItem, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createV1alpha1MenuItem(menuItem, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.createV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteV1alpha1MenuItem(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteV1alpha1MenuItem(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.deleteV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getV1alpha1MenuItem(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getV1alpha1MenuItem(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.getV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List v1alpha1/MenuItem
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listV1alpha1MenuItem(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItemList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listV1alpha1MenuItem(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.listV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchV1alpha1MenuItem(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchV1alpha1MenuItem(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.patchV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update v1alpha1/MenuItem
         * @param {string} name Name of menuitem
         * @param {MenuItem} [menuItem] Updated menuitem
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateV1alpha1MenuItem(name: string, menuItem?: MenuItem, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateV1alpha1MenuItem(name, menuItem, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuItemApi.updateV1alpha1MenuItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * V1alpha1MenuItemApi - factory interface
 * @export
 */
export const V1alpha1MenuItemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1alpha1MenuItemApiFp(configuration)
    return {
        /**
         * Create v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.createV1alpha1MenuItem(requestParameters.menuItem, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteV1alpha1MenuItem(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiGetV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiGetV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.getV1alpha1MenuItem(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiListV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiListV1alpha1MenuItemRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MenuItemList> {
            return localVarFp.listV1alpha1MenuItem(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.patchV1alpha1MenuItem(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update v1alpha1/MenuItem
         * @param {V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig): AxiosPromise<MenuItem> {
            return localVarFp.updateV1alpha1MenuItem(requestParameters.name, requestParameters.menuItem, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest {
    /**
     * Fresh menuitem
     * @type {MenuItem}
     * @memberof V1alpha1MenuItemApiCreateV1alpha1MenuItem
     */
    readonly menuItem?: MenuItem
}

/**
 * Request parameters for deleteV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof V1alpha1MenuItemApiDeleteV1alpha1MenuItem
     */
    readonly name: string
}

/**
 * Request parameters for getV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiGetV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiGetV1alpha1MenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof V1alpha1MenuItemApiGetV1alpha1MenuItem
     */
    readonly name: string
}

/**
 * Request parameters for listV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiListV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiListV1alpha1MenuItemRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof V1alpha1MenuItemApiListV1alpha1MenuItem
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof V1alpha1MenuItemApiListV1alpha1MenuItem
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof V1alpha1MenuItemApiListV1alpha1MenuItem
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof V1alpha1MenuItemApiListV1alpha1MenuItem
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof V1alpha1MenuItemApiListV1alpha1MenuItem
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof V1alpha1MenuItemApiPatchV1alpha1MenuItem
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof V1alpha1MenuItemApiPatchV1alpha1MenuItem
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateV1alpha1MenuItem operation in V1alpha1MenuItemApi.
 * @export
 * @interface V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest
 */
export interface V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest {
    /**
     * Name of menuitem
     * @type {string}
     * @memberof V1alpha1MenuItemApiUpdateV1alpha1MenuItem
     */
    readonly name: string

    /**
     * Updated menuitem
     * @type {MenuItem}
     * @memberof V1alpha1MenuItemApiUpdateV1alpha1MenuItem
     */
    readonly menuItem?: MenuItem
}

/**
 * V1alpha1MenuItemApi - object-oriented interface
 * @export
 * @class V1alpha1MenuItemApi
 * @extends {BaseAPI}
 */
export class V1alpha1MenuItemApi extends BaseAPI {
    /**
     * Create v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public createV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiCreateV1alpha1MenuItemRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).createV1alpha1MenuItem(requestParameters.menuItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public deleteV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiDeleteV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).deleteV1alpha1MenuItem(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiGetV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public getV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiGetV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).getV1alpha1MenuItem(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiListV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public listV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiListV1alpha1MenuItemRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).listV1alpha1MenuItem(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public patchV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiPatchV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).patchV1alpha1MenuItem(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update v1alpha1/MenuItem
     * @param {V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuItemApi
     */
    public updateV1alpha1MenuItem(requestParameters: V1alpha1MenuItemApiUpdateV1alpha1MenuItemRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuItemApiFp(this.configuration).updateV1alpha1MenuItem(requestParameters.name, requestParameters.menuItem, options).then((request) => request(this.axios, this.basePath));
    }
}

