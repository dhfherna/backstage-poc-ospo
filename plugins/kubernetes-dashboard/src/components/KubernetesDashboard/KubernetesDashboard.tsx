import React, { useRef, useEffect } from 'react';

const KubernetesDashboard = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    document.cookie = "jweToken=%7B%22protected%22%3A%22eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0%22%2C%22aad%22%3A%22eyJleHAiOiIyMDI1LTAyLTAzVDIyOjAzOjI3WiIsImlhdCI6IjIwMjUtMDItMDNUMjE6NDg6MjdaIn0%22%2C%22encrypted_key%22%3A%22BZcalQESseJbK-lmxtK2Y6HCj7I65FT4uei7_3lW2BGDJOAmq11RoA-tvfVj3_43ME04FwmpMQgVBtqLqe-mNZzoAi4AztMSw1RE2dYRY8pJygPLOFT5rN2slaooqJ3SXbq1shrH_GwqrgNXkSqoxc3hTC6ozDnnzdeEsOuXIG-9GG_P0jPbHVQPTt8GT7hZdiqh3bevzfiPvlTH1AAltURKoxGIrRNW12NikBcqF4TXQUNHZsFrdxqVo8uAEYIGcTK82u0s1BTOlnqA-F1_9r-6ZmYmhJzhvRLYTxAfw5tX0Q-pQg_qcFwCZgt3zgS0VrGECpc2g_8mLo51gYwEEw%22%2C%22iv%22%3A%2262tCsyvKltB_74Ps%22%2C%22ciphertext%22%3A%22J-F_BwXmEHAG1OniNmortsKsmL75ONu20LNN7hPD6hmTBcctNRuYWLqS4XYW0eTMh1EY0V02CIecXzNLypsaD0ffzKc_RC5tIzum2Dt8c_FOCRgcVINV_wa0qy8D7K-X0tOOhcgHYWB50nhkA3dwbyMJZ6PpEVt4kjzPaJ_kA8Wjqq2OyiDXf5Uq_-6U5EUSDQ5LbjEsNArY4xseqSHPEFQzqzoW6gpFr05lVjXoJYMK8zEAhxx2AAWay7zFb0MRXLOGQtEwYtIWKbFwhy0unmmp0Vr7f_9iVuAbGCemf6U_XTL4b6-EQggR2FG1rA7haiwr3BkjVYKu4PMyWMfTq7GyDlbTudausOcN5cDUnJvD4OhaqSopIEGbDK8xwWnT0e1XuGRUmlzR85m6_5pgtgaE-pSOirJanADSRd27ZqyDCGxDVlrqeZa1cfvGG46NVecylUdea6q6TZwwY_hu9K7wp_Jk4g952ioRYCUGgpxSZ0fu7wtLZnLESyH_KpRVadIBC7rUNRj5HIVDb7CasMJIWfbvug8yuMgF355_xh9Vf8ItDeA-Cth8gvYra-rU1UsZcBt3FJyDZFuxAssVTfIXkl2CskFWOHZFiqNpe-vUtBFiBTXBeaxZ-JeV3W7wKf62rts93QQk8fF0qH2WjNQbgT4ohgZ2QjC8HHlU9p935q5xGK5cNGOJlIwFmUjsISv4na39hZxAYQngLHlIriHzlKYIdQnBRY7f02WiiZVRPC5-dpltJyDvvV-xpH2ATM28XewXtUf2GPZ8n4tvH2A0JQEZme7JUIIbGogmIIj77LAmMvHR_wVUkFV6nSmaIMtpQ4rbAEosizfGn1tgIN622sgKjhY3Gbafk2YfT-LMx7Hr5Yn8nJiDXZCqy-QrgP6U-A078422Fsw9o--IQInbT2E64bSzpp0QSLejgnhVGLCwoKTHDN-lP62r-Wf2n6cOl4pE_zmT0R4RG13ce0pPcdrx924pETsM6E4MdibnOPq7kO_BPdVYULpNYzHihprYpi47bvOW3iPWBJNT87nKngF-W20wIMqp-bY1GoylYRkjT33-3sx9_9Us8DpuyKzN56fGVI8fHgTBkPwpaltJ4o5UpcGP9bs1-iOYbJmXEUqSohObF47OIm0_ObpSuYNnMlnEWkdqNdbxc46kdmo45797scbOpkrx69ebAOq3v8qKEH_KJaU5-giBBaBfI93zeBPCPPBTqYMFkcN7V0Dt0G9AUGwZiwOMZLZBmxl-l90EC4YH%22%2C%22tag%22%3A%22HCiEbVCP3gJk0MTQrnRUUA%22%7D; path=/; Secure; SameSite=Strict";
    document.cookie = "username=default; path=/; SameSite=Lax";

    console.log("✅ Cookies `ferToken` y `username` agregadas correctamente");
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0, 
      overflow: 'hidden'
    }}>
      <h1 style={{ textAlign: 'center', margin: '0', padding: '10px', flexShrink: 0 }}>Dashboard EKS</h1>
      <iframe
        ref={iframeRef}
        src="https://localhost:10443"
        style={{ 
          flexGrow: 1, 
          width: '70%',  
          border: 'none', 
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default KubernetesDashboard;
