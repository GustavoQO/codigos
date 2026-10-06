/* =========================================================
   CENTRAL DE CÁLCULOS CLÍNICOS - ROSAMED
========================================================= */


/* =========================================================
   FUNÇÃO AUXILIAR
========================================================= */

function getNumber(id) {

    return Number(
        document.getElementById(id).value
    );

}


/* =========================================================
   IMC
========================================================= */

function calculateBMI() {

    const weight =
        getNumber("weight");

    const height =
        getNumber("height");

    const result =
        document.getElementById(
            "bmiResult"
        );


    if (
        weight <= 0 ||
        height <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe peso e altura válidos.
            </span>

        `;

        return;

    }


    const bmi =
        weight /
        (height * height);


    let classification;


    if (bmi < 18.5) {

        classification =
            "Baixo peso";

    }

    else if (bmi < 25) {

        classification =
            "Peso adequado";

    }

    else if (bmi < 30) {

        classification =
            "Sobrepeso";

    }

    else {

        classification =
            "Obesidade";

    }


    result.innerHTML = `

        <strong>
            IMC: ${bmi.toFixed(1)}
        </strong>

        <span>
            Classificação: ${classification}
        </span>

    `;

}


/* =========================================================
   SUPERFÍCIE CORPORAL - MOSTELLER
========================================================= */

function calculateBSA() {

    const weight =
        getNumber("bsaWeight");

    const height =
        getNumber("bsaHeight");

    const result =
        document.getElementById(
            "bsaResult"
        );


    if (
        weight <= 0 ||
        height <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe peso e altura válidos.
            </span>

        `;

        return;

    }


    const bsa =
        Math.sqrt(
            (weight * height) / 3600
        );


    result.innerHTML = `

        <strong>
            SC: ${bsa.toFixed(2)} m²
        </strong>

        <span>
            Superfície corporal estimada pela fórmula
            de Mosteller.
        </span>

    `;

}


/* =========================================================
   PRESSÃO ARTERIAL MÉDIA
========================================================= */

function calculateMAP() {

    const systolic =
        getNumber("systolic");

    const diastolic =
        getNumber("diastolic");

    const result =
        document.getElementById(
            "mapResult"
        );


    if (
        systolic <= 0 ||
        diastolic <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe valores válidos de pressão arterial.
            </span>

        `;

        return;

    }


    const map =
        (
            systolic +
            (2 * diastolic)
        ) / 3;


    result.innerHTML = `

        <strong>
            PAM: ${map.toFixed(1)} mmHg
        </strong>

        <span>
            Estimativa da pressão arterial média.
        </span>

    `;

}


/* =========================================================
   ÍNDICE DE CHOQUE
========================================================= */

function calculateShockIndex() {

    const heartRate =
        getNumber("heartRate");

    const systolic =
        getNumber("shockSBP");

    const result =
        document.getElementById(
            "shockResult"
        );


    if (
        heartRate <= 0 ||
        systolic <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe frequência cardíaca e pressão
                sistólica válidas.
            </span>

        `;

        return;

    }


    const shockIndex =
        heartRate /
        systolic;


    result.innerHTML = `

        <strong>
            Índice de choque: ${shockIndex.toFixed(2)}
        </strong>

        <span>
            O resultado deve ser interpretado em conjunto
            com o quadro clínico do paciente.
        </span>

    `;

}


/* =========================================================
   ÂNION GAP
========================================================= */

function calculateAnionGap() {

    const sodium =
        getNumber("agNa");

    const chloride =
        getNumber("agCl");

    const bicarbonate =
        getNumber("agHco3");

    const result =
        document.getElementById(
            "anionGapResult"
        );


    if (
        sodium <= 0 ||
        chloride <= 0 ||
        bicarbonate <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe Na⁺, Cl⁻ e HCO₃⁻ válidos.
            </span>

        `;

        return;

    }


    const anionGap =
        sodium -
        (
            chloride +
            bicarbonate
        );


    result.innerHTML = `

        <strong>
            Ânion Gap: ${anionGap.toFixed(1)} mEq/L
        </strong>

        <span>
            Cálculo realizado sem inclusão do potássio.
        </span>

    `;

}


/* =========================================================
   SÓDIO CORRIGIDO
========================================================= */

function calculateCorrectedSodium() {

    const sodium =
        getNumber("correctedNa");

    const glucose =
        getNumber("glucose");

    const result =
        document.getElementById(
            "correctedNaResult"
        );


    if (
        sodium <= 0 ||
        glucose <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe sódio e glicemia válidos.
            </span>

        `;

        return;

    }


    const corrected =
        sodium +
        (
            1.6 *
            (
                (glucose - 100) / 100
            )
        );


    result.innerHTML = `

        <strong>
            Na⁺ corrigido: ${corrected.toFixed(1)} mEq/L
        </strong>

        <span>
            Estimativa utilizando fator de correção
            de 1,6 mEq/L para cada 100 mg/dL acima
            de 100 mg/dL.
        </span>

    `;

}


/* =========================================================
   OSMOLARIDADE CALCULADA
========================================================= */

function calculateOsmolarity() {

    const sodium =
        getNumber("osmNa");

    const glucose =
        getNumber("osmGlucose");

    const bun =
        getNumber("bun");

    const result =
        document.getElementById(
            "osmResult"
        );


    if (
        sodium <= 0 ||
        glucose <= 0 ||
        bun < 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe valores laboratoriais válidos.
            </span>

        `;

        return;

    }


    const osmolarity =
        (
            2 * sodium
        ) +
        (
            glucose / 18
        ) +
        (
            bun / 2.8
        );


    result.innerHTML = `

        <strong>
            Osmolaridade: ${osmolarity.toFixed(1)} mOsm/L
        </strong>

        <span>
            Valor calculado a partir de sódio, glicemia
            e BUN.
        </span>

    `;

}


/* =========================================================
   CLEARANCE DE CREATININA
   COCKCROFT-GAULT
========================================================= */

function calculateCreatinineClearance() {

    const age =
        getNumber("crAge");

    const weight =
        getNumber("crWeight");

    const creatinine =
        getNumber("crCreatinine");

    const sex =
        document.getElementById(
            "crSex"
        ).value;

    const result =
        document.getElementById(
            "crResult"
        );


    if (
        age <= 0 ||
        weight <= 0 ||
        creatinine <= 0
    ) {

        result.innerHTML = `

            <strong>
                Atenção
            </strong>

            <span>
                Informe idade, peso e creatinina válidos.
            </span>

        `;

        return;

    }


    let clearance =
        (
            (140 - age) *
            weight
        ) /
        (
            72 *
            creatinine
        );


    if (sex === "female") {

        clearance *= 0.85;

    }


    result.innerHTML = `

        <strong>
            CrCl estimado: ${clearance.toFixed(1)} mL/min
        </strong>

        <span>
            Estimativa pelo método de Cockcroft-Gault.
            A aplicação clínica depende do contexto e
            da avaliação profissional.
        </span>

    `;

}