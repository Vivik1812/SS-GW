FROM eclipse-temurin:25-jdk-alpine AS builder

WORKDIR /app

COPY .mvn/ .mvn/
COPY .mvnw/ .mvnw/ 
COPY pom.xml ./
RUN .chmod +x mvnw

COPY src/ ./src/
RUN ./mvnw  -DskipTests package

FROM eclipse-temurin:25-jre-alpine

WORKDIR /app

RUN groupadd --system app && useradd --system --gid app --create-home --home-dir /home/app app
COPY --from=builder /app/target/*.jar app.jar
USER app

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]