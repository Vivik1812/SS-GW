package com.pg.api_gateway.filter;

import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@Component
public class UserFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        return ReactiveSecurityContextHolder.getContext()
            .map (context -> context.getAuthentication())
            .filter(auth -> auth instanceof JwtAuthenticationToken)
            .cast(JwtAuthenticationToken.class)
            .flatMap(auth -> {
                Jwt jwt = auth.getToken();

                String roles = auth.getAuthorities().stream()
                    .map(a -> a.getAuthority())
                    .reduce((a, b) -> a + "," + b)
                    .orElse("USER");

                ServerWebExchange mutated = exchange.mutate()
                    .request(r -> r.headers(headers -> {
                        headers.set("X-User-Id", jwt.getSubject());
                        headers.set("X-User-Email", jwt.getClaimAsString("email"));
                        headers.set("X-User-Name", jwt.getClaimAsString("name"));
                        headers.set("X-User-Roles", roles);
                    }))
                    .build();

                return chain.filter(mutated);
            })
            .switchIfEmpty(chain.filter(exchange));
        }
    @Override
    public int getOrder() {
        return -1;
    }

            
}
