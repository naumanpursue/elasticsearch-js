/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Snapshot {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  async cleanupRepository (this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCleanupRepositoryResponse>
  async cleanupRepository (this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCleanupRepositoryResponse, unknown>>
  async cleanupRepository (this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotCleanupRepositoryResponse>
  async cleanupRepository (this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.name.toString())}/_cleanup`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async clone (this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCloneResponse>
  async clone (this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCloneResponse, unknown>>
  async clone (this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptions): Promise<T.SnapshotCloneResponse>
  async clone (this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot', 'target_snapshot']
    const acceptedBody: string[] = ['indices']
    const querystring: Record<string, any> = {}
    let body: Record<string, any> | string
    // @ts-expect-error
    if (typeof params?.body === 'string') {
      // @ts-expect-error
      body = params.body
    } else {
      // @ts-expect-error
      body = params.body != null ? { ...params.body } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_clone/${encodeURIComponent(params.target_snapshot.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async create (this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCreateResponse>
  async create (this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCreateResponse, unknown>>
  async create (this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptions): Promise<T.SnapshotCreateResponse>
  async create (this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const acceptedBody: string[] = ['ignore_unavailable', 'include_global_state', 'indices', 'feature_states', 'metadata', 'partial']
    const querystring: Record<string, any> = {}
    let body: Record<string, any> | string
    // @ts-expect-error
    if (typeof params?.body === 'string') {
      // @ts-expect-error
      body = params.body
    } else {
      // @ts-expect-error
      body = params.body != null ? { ...params.body } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async createRepository (this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCreateRepositoryResponse>
  async createRepository (this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCreateRepositoryResponse, unknown>>
  async createRepository (this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotCreateRepositoryResponse>
  async createRepository (this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['repository', 'type', 'settings']
    const querystring: Record<string, any> = {}
    let body: Record<string, any> | string
    // @ts-expect-error
    if (typeof params?.body === 'string') {
      // @ts-expect-error
      body = params.body
    } else {
      // @ts-expect-error
      body = params.body != null ? { ...params.body } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_snapshot/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async delete (this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotDeleteResponse>
  async delete (this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotDeleteResponse, unknown>>
  async delete (this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptions): Promise<T.SnapshotDeleteResponse>
  async delete (this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async deleteRepository (this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotDeleteRepositoryResponse>
  async deleteRepository (this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotDeleteRepositoryResponse, unknown>>
  async deleteRepository (this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotDeleteRepositoryResponse>
  async deleteRepository (this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_snapshot/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async get (this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotGetResponse>
  async get (this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotGetResponse, unknown>>
  async get (this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptions): Promise<T.SnapshotGetResponse>
  async get (this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async getRepository (this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotGetRepositoryResponse>
  async getRepository (this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotGetRepositoryResponse, unknown>>
  async getRepository (this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotGetRepositoryResponse>
  async getRepository (this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_snapshot/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_snapshot'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async repositoryAnalyze (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async repositoryAnalyze (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async repositoryAnalyze (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async repositoryAnalyze (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/_analyze`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async restore (this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotRestoreResponse>
  async restore (this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotRestoreResponse, unknown>>
  async restore (this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptions): Promise<T.SnapshotRestoreResponse>
  async restore (this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const acceptedBody: string[] = ['ignore_index_settings', 'ignore_unavailable', 'include_aliases', 'include_global_state', 'index_settings', 'indices', 'partial', 'rename_pattern', 'rename_replacement']
    const querystring: Record<string, any> = {}
    let body: Record<string, any> | string
    // @ts-expect-error
    if (typeof params?.body === 'string') {
      // @ts-expect-error
      body = params.body
    } else {
      // @ts-expect-error
      body = params.body != null ? { ...params.body } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_restore`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async status (this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotStatusResponse>
  async status (this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotStatusResponse, unknown>>
  async status (this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptions): Promise<T.SnapshotStatusResponse>
  async status (this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.repository != null && params.snapshot != null) {
      method = 'GET'
      path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_status`
    } else if (params.repository != null) {
      method = 'GET'
      path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/_status`
    } else {
      method = 'GET'
      path = '/_snapshot/_status'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  async verifyRepository (this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotVerifyRepositoryResponse>
  async verifyRepository (this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotVerifyRepositoryResponse, unknown>>
  async verifyRepository (this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotVerifyRepositoryResponse>
  async verifyRepository (this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.name.toString())}/_verify`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
