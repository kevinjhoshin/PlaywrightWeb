Feature: Solicitudes y reclamos
    Como un usuario
    Quiero consultar Giru para realizar pedidos y reclamos

    #   LISTA MARCATIPO:                                LISTA TIPOCLIENTE:
    #   Visa Clasica                                    553
    #   Visa Oro                                        545
    #   Visa Signature                                  504
    #   Visa CashBack Signature                         504
    #   Visa CashBack Platinum                          544
    #   Visa CashBack Oro                               545
    #   Visa Platinum                                   544
    #   Visa Infinite                                   553
    #   Visa Access                                     508
    #   Visa Premia                                     333
    #   American Express Green                          552
    #   American Express Revolving Gold                 545
    #   American Express The Platinum Card              501
    #   American Express Blue                           552
    #   American Express Platinum                       544
    #   American Express Black                          504
    
    @SolicitudUpgradeGiru
    Scenario Outline: realizar un cambio de tarjeta upgrade
        Given Cargo la pagina de GIRU en chrome e inicio sesion "B36142" "12345678"
        When Identifico al cliente con documento dni "<dni>"
        When Registro su tarjeta a la cual va a tramitar
        When Tipifico la solicitud de tarjeta upgrade con marcatipo destino "<marcatipo>" "<tipocliente>" y fecha "<fechaentrega>" "<textotramite>" "<responsetramite>"
        Then Realizamos con exito y obtendremos el numero de tramite
        Examples:
            | dni      | marcatipo          | tipocliente | fechaentrega | textotramite | responsetramite |
            | 73968999 | Visa Clasica       | 553         | 31/01/2023   | TXT          | RPT             |
            | 73968789 | Visa Oro           | 545         | 31/01/2023   | TXT          | RPT             |
        #    | 37425261 | Visa Platinum     | 553         | 31/01/2023   | TXT          | RPT             |

    @CambioCorrespondencia
    Scenario Outline: realizar cambio forma envio de correspondencia
        Given Cargo la pagina de GIRU en chrome e inicio sesion "B36142" "12345678"
        When Identifico al cliente con documento dni "<dni>"
        When Registro su tarjeta a la cual va a tramitar
        When Tipifico el pedido cambio forma envio de correspondencia a envio por email sin generar pago "<textoramite>" "<responsetramite>"
        Then Realizamos con exito y obtendremos el numero de tramite
        Examples:
                | dni       | textoramite   | responsetramite   |
                | 73968999  | TXT           | RPT               |
                | 73968789  | TXT           | RPT               |