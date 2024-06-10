<template>
  <section id="status" class="px-4 py-8">
    <div class="flex justify-center items-center">
      <div class="font-light text-gray-500 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Überwachung / Status</h2>
        <p class="mb-4">
          Eine Übersicht über den Status jedes Einzelsystem bzw. Einzelgeräts.
        </p>

        <ul role="list" class="max-w-lg divide-y divide-gray-200 mx-auto">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <i class="fa fa-lightbulb-o fa-lg"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  Beleuchtung
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Ist die Beleuchtung aktuell eingeschalten?
                </p>
              </div>
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
								<span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
								Aktiviert
							</span>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <i class="fa fa-clock-o fa-lg"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  Zeit
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Ist die Beleuchtung bei aktueller Tageszeit aktiviert?
                </p>
              </div>
              <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
								<span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
								Deaktiviert
							</span>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <i class="fa fa-mobile fa-lg"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  Smartphone
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Wird ein Smartphone im Netzwerk erkannt?
                </p>
              </div>
              <span v-if="phone === 'present'" class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
								<span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
								Aktiviert
							</span>
              <span v-else class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
								<span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
								Deaktivert
							</span>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <i class="fa fa-battery-half fa-lg"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  Stromverbrauch
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Wie viel verbrauchen die LED's aktuell?
                </p>
              </div>
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
								<span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
								~ 5 W
							</span>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <i class="fa fa-envira fa-lg"></i>
                <!-- <i class="fa fa-globe fa-lg"></i> -->
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  CO2-Ausstoß
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Wie viel CO2 wird bei der Verwendung der LED's verbraucht?
                </p>
              </div>
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
								<span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
								0,00042 kg
							</span>
            </div>
          </li>
        </ul>
        <!-- {{ this.data }} -->
        {{ this.phone }}
        {{ this.brightness }} <!-- in Lux -->
        {{ this.power }} <!-- W -->
        {{ this.led }}

      </div>
    </div>
  </section>
</template>

<script>
import api from "../api/api.js";
export default {
  name: "StatusSection",
  data() {
    return {
      data: [],
      phone: null,
      brightness: null,
      power: null,
      led: null,
    }
  },
  mounted() {
    this.getData();

    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    async getData() {
      try {
        const fetchedData = await api.fetchData();
        console.log(fetchedData);
        this.data = fetchedData;
        this.extractValues(fetchedData);
      } catch (error) {
        console.error(error);
      }
    },
    extractValues(data) {
      //Handy -> Internals
      //MQTT2_DVES_DF3CFC (led stripes) -> Readings -> state -> Value
      //Helligkeitssenor -> Readings -> brightness -> Value (Lux)
      //HM_2C112D (Strom) ->
      //HM_2C112D_Pwr -> Readings -> power -> Value
      const phoneName = "Handy";
      const ledName = "MQTT2_DVES_DF3CFC";
      const brightnessName = "HelligkeitSensor";
      const powerName = "HM_2C112D_Pwr";

      const results = data.Results;
      results.forEach(result => {
        const name = result.Name;
        const internals = result.Internals;
        const readings = result.Readings;

        switch (name) {
          case phoneName:
            const phoneState = internals.STATE;
            if(phoneState !== null) {
              this.phone = phoneState;
            }
            break;
          case ledName:
            const ledStateGeneral = readings.state;
            if(ledStateGeneral !== null) {
              const ledState = ledStateGeneral.Value;
              if(ledState !== null) {
                this.led = ledState;
              }
            }
            break;
          case brightnessName:
            const brightnessValueGeneral = readings.brightness;
            if(brightnessValueGeneral !== null) {
              const brightnessValue = brightnessValueGeneral.Value;
              if(brightnessValue !== null) {
                this.brightness = brightnessValue;
              }
            }
            break;
          case powerName:
            const powerValueGeneral = readings.power;
            if(powerValueGeneral !== null) {
              const powerValue = powerValueGeneral.Value;
              if(powerValue !== null) {
                this.power = powerValue;
              }
            }

            break;
          default:
            break;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
