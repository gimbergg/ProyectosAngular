"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "SifeSincronizar",
    embedded: false
  },
  {
    name: "SifeSincronizarActividade",
    embedded: false
  },
  {
    name: "SifeSincronizarListaLeyendasFactura",
    embedded: false
  },
  {
    name: "SifeSincronizarListaMensajesServicio",
    embedded: false
  },
  {
    name: "SifeSincronizarListaProductosServicio",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaEventosSignificativo",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaMotivoAnulacion",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaPaisOrigen",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoAmbiente",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoComponente",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoDepartamento",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoDocumentoFiscal",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoDocumentoIdentidad",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoDocumentoSector",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoEmision",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoMetodoPago",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoModalidad",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoMoneda",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaTipoPuntoVenta",
    embedded: false
  },
  {
    name: "SifeSincronizarParametricaUnidadMedida",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
