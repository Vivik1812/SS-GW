FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

COPY mvnw mvnw
COPY .mvn .mvn
COPY pom.xml ./

RUN sed -i 's/\r$//' mvnw && chmod +x mvnw

COPY src src

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY --from=builder --chown=app /app/target/*.jar app.jar

USER app

EXPOSE 9000
ENTRYPOINT [ "java", "-jar", "/app/app.jar" ]