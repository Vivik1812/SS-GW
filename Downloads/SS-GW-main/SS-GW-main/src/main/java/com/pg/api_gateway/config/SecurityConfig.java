package com.pg.api_gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.http.HttpMethod;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
            .csrf(ServerHttpSecurity.CsrfSpec::disable)
            .authorizeExchange(exchanges -> exchanges
             
            //gateway check    
            .pathMatchers("/actuator/**").permitAll()

            //publicaciones sinlogin    
            .pathMatchers(HttpMethod.GET,"/publicaciones/**").permitAll()

            //gestion del perfil del usuario
            .pathMatchers("/usuarios/**").authenticated()

            //Crear, editar y cerrar un reporte
            .pathMatchers(HttpMethod.POST,   "/publicaciones/**").authenticated()
            .pathMatchers(HttpMethod.PUT,    "/publicaciones/**").authenticated()
            .pathMatchers(HttpMethod.DELETE, "/publicaciones/**").authenticated()

            // Chat en tiempo real (WebSocket)
            .pathMatchers("/chat/**").authenticated()

            // Notificaciones
            .pathMatchers("/notificaciones/**").authenticated()

            // Cualquier ruta no listada: protegida por defecto
            .anyExchange().authenticated()
                )
            // Valida el JWT emitido por Google Cloud
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(new CustomJwtConverter()))
            );

            return http.build();
        }
}


