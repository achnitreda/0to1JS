const dogYears = (planetName, dogAgeSec) => {
    switch (planetName) {
        case "earth":
            return Math.round(((dogAgeSec / 31557600) * 7) * 100) / 100
        case "mercury":
            return Math.round(((dogAgeSec / 31557600 / 0.2408467) * 7) * 100) / 100
        case "venus":
            return Math.round(((dogAgeSec / 31557600 / 0.61519726) * 7) * 100) / 100
        case "mars":
            return Math.round(((dogAgeSec / 31557600 / 1.8808158) * 7) * 100) / 100
        case "jupiter":
            return Math.round(((dogAgeSec / 31557600 / 11.862615) * 7) * 100) / 100
        case "saturn":
            return Math.round(((dogAgeSec / 31557600 / 29.447498) * 7) * 100) / 100
        case "uranus":
            return Math.round(((dogAgeSec / 31557600 / 84.016846) * 7) * 100) / 100
        case "neptune":
            return Math.round(((dogAgeSec / 31557600 / 164.79132) * 7) * 100) / 100
    }
}
