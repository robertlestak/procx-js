# procx-js

`procx-js` is a simple wrapper library for [procx](https://github.com/robertlestak/procx). `procx-js` exports a single function, `procx`, which accepts one argument `args`, and returns a promise that resolves to the result of the procx query configured in the `args`. If there is no data returned, the promise will resolve to `null`.

You must have `procx` installed in order to use `procx-js`.

See `examples/example.js` for an example of using one codebase and dynamically pulling from multiple services.

Here is a basic example:

```js
let args = [
    "-driver",
    "redis-list",
    "-redis-host",
    "localhost",
    "-redis-port",
    "6379",
    "-redis-key",
    "test-redis-list"
]
let input = JSON.stringify(data)
let output = await procx(args)
console.log(output)
```

Since the entire data layer configuration is contained within the `args` JS array, this can be moved to a configuration layer such as Vault or Consul. If you ever need to change the data layer configuration, you can simply update the `args` configuration, and your code will remain entirely the same.