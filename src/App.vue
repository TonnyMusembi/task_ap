<script setup>
import { ref } from "vue";
import { useGenerateStore } from "../src/stores/generate"
const { genearteRecords } = useGenerateStore();
const startDate = ref('2024-07-04')
const fetch = async () =>{

  await genearteRecords(startDate.value);
}
fetch();
const data = ref({
  "array": [
    {
      "id": 57,
      "created_at": 1704451485651,
      "name": "Nathaniel Mcgrath",
      "img": "https://i.pravatar.cc/150?img=46",
      "position": "Corporate Counsel",
      "city": "Lisbon, Portugal",
      "_orbits_last_message": {
        "message": "Your opinion matters! Please take a few minutes to complete our customer satisfaction survey. Your feedback will help us improve our services and offerings.",
        "message_head": "Customer Satisfaction Survey"
      }
    },
    {
      "id": 57,
      "created_at": 1704451485651,
      "name": "Nathaniel Mcgrath",
      "img": "https://i.pravatar.cc/150?img=46",
      "position": "Corporate Counsel",
      "city": "Lisbon, Portugal",
      "_orbits_last_message": {
        "message": "Your opinion matters! Please take a few minutes to complete our customer satisfaction survey. Your feedback will help us improve our services and offerings.",
        "message_head": "Customer Satisfaction Survey"
      }
    },
    {
      "id": 18,
      "created_at": 1704451485580,
      "name": "Shirley Watts",
      "img": "https://i.pravatar.cc/150?img=7",
      "position": "Product Manager",
      "city": "Moscow, Russia",
      "_orbits_last_message": {
        "message": "Special offer just for you! Enjoy a 20% discount on our latest range of products until April 30th. Use the code SPRING20 at checkout. Don’t miss out!",
        "message_head": "Product Discount Offer"
      }
    },
    {
      "id": 60,
      "created_at": 1704451485654,
      "name": "Kai Burton",
      "img": "https://i.pravatar.cc/150?img=49",
      "position": "Procurement Manager",
      "city": "Panama City, Panama",
      "_orbits_last_message": {
        "message": "We value your input on our recent workshop. Please share your feedback and suggestions. Your responses will help us enhance future workshops.",
        "message_head": "Workshop Feedback Request"
      }
    },
    {
      "id": 16,
      "created_at": 1704451485577,
      "name": "Steven Johns",
      "img": "https://i.pravatar.cc/150?img=5",
      "position": "Financial Analyst",
      "city": "Sydney, Australia",
      "_orbits_last_message": {
        "message": "Check out our latest company newsletter for updates on our community initiatives, upcoming events, and employee achievements. Your feedback is always welcome!",
        "message_head": "Company Newsletter"
      }
    }
  ],
  "contact_date": "2024-07-04"
},
  {
    "array": [
      {
        "id": 77,
        "created_at": 1704451485674,
        "name": "Roman Solomon",
        "img": "https://i.pravatar.cc/150?img=66",
        "position": "Laboratory Manager",
        "city": "Bogota, Colombia",
        "_orbits_last_message": {
          "message": "We recognize the issue you've encountered with our service and have escalated it to our senior customer support team. We're committed to resolving this as a priority and will provide a resolution within 48 hours. Your satisfaction is our top concern, and we apologize for any inconvenience caused. Thank you for your patience.",
          "message_head": "Customer Service Escalation"
        }
      },
      {
        "id": 43,
        "created_at": 1704451485611,
        "name": "Raiden Logan",
        "img": "https://i.pravatar.cc/150?img=32",
        "position": "Attorney",
        "city": "Delhi, India",
        "_orbits_last_message": {
          "message": "This is a reminder of our Annual General Meeting on June 15th. Key agenda items include company performance review and future strategies. Your attendance is important.",
          "message_head": "Annual General Meeting"
        }
      }
    ],
    "contact_date": "2024-07-03"
  },);


</script>
<template>
  <div class="text-teal-500">
    test
  </div>
  <div class="max-w-7xl mx-auto">
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-semibold text-center mb-4">Contact Dates</h2>
      <div class="orbits-container">
        <!-- <div v-for="(day, index) in data" :key="index" class="orbit-wrapper"> -->
        <!-- <h3 class="text-lg font-semibold text-center mb-2">{{ day.contact_date }}</h3> -->
        <div class="orbit">
          <template v-for="(data, id) in data.array" :key="id">
            <div class="orbit-item" :class="`item-${id + 1}`" 
              >
              <img :src="data.img" alt=" h-4 w-4" class="w-4 h-4 rounded-full mx-auto">
              <div class="details">
                <h3 class="text-xl font-semibold">{{ data.name }}</h3>
                <p class="text-gray-600">{{ data.position }}</p>
                <p class="text-gray-600">{{ data.city }}</p>
                <!-- <h4 class="font-semibold mt-2">{{ data._orbits_last_message.message_head }}</h4> -->
                <!-- <p>{{ data._orbits_last_message.message }}</p> -->
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.orbit {
  position: relative;
  width: 300px;
  height: 150px;
  margin: 0 auto;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border: 2px solid #E5E7EB;
  /* Tailwind gray-200 */
  border-bottom: none;
}

.orbit-item {
  position: absolute;
  width: 100px;
  height: 100px;
  text-align: center;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.item-1 {
  top: 0%;
  left: 50%;
}

.item-2 {
  top: 50%;
  left: 100%;
}

.item-3 {
  top: 50%;
  left: 0%;
}

.item-4 {
  top: 100%;
  left: 50%;
}

.orbit-item img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.details {
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background: #f9fafb;
  /* Tailwind gray-50 */
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>