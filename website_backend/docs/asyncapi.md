# Backend service API 1.0.0 documentation

* License: [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
* Default content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

This is the website backend service that interact with users.

## Table of Contents

* [Servers](#servers)
  * [development](#development-server)
* [Operations](#operations)
  * [SUB orderservice/new/order](#sub-orderserviceneworder-operation)
  * [PUB management/new/product](#pub-managementnewproduct-operation)

## Servers

### `development` Server

* URL: `mqtt://test.mosquitto.org`
* Protocol: `mqtt`

Local development broker

#### `mqtt` Server specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| clientId | - | - | `"notifications-service"` | - | - |


## Operations

### SUB `orderservice/new/order` Operation

* Operation ID: `produceNewOrder`

New order being placed

#### Message New order message `newOrderMessage`

*When a new order has been placed this message is sent.*

* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |
| 0 (allOf item) | object | - | - | - | **additional properties are allowed** |
| product_id | integer | - | - | - | - |
| product_title | string | - | - | - | - |
| product_type | string | - | allowed (`"record"`, `"mp3"`, `"merchandise"`) | - | - |
| 1 (allOf item) | object | - | - | - | **additional properties are allowed** |
| 1.order_timestamp | string | - | - | format (`date-time`) | - |

> Examples of payload _(generated)_

```json
{
  "product_id": 0,
  "product_title": "string",
  "product_type": "record",
  "order_timestamp": "2019-08-24T14:15:22Z"
}
```



### PUB `management/new/product` Operation

* Operation ID: `consumeNewProduct`

New order being placed

#### Message New product message `newProductMessage`

*When a new product has been created.*

* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |
| 0 (allOf item) | object | - | - | - | **additional properties are allowed** |
| product_id | integer | - | - | - | - |
| product_title | string | - | - | - | - |
| product_type | string | - | allowed (`"record"`, `"mp3"`, `"merchandise"`) | - | - |
| 1 (allOf item) | object | - | - | - | **additional properties are allowed** |
| 1.product_creation_timestamp | string | - | - | format (`date-time`) | - |

> Examples of payload _(generated)_

```json
{
  "product_id": 0,
  "product_title": "string",
  "product_type": "record",
  "product_creation_timestamp": "2019-08-24T14:15:22Z"
}
```



