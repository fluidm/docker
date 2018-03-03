FROM ubuntu:16.04

# -------------------------------------

RUN apt-get update && \
    apt-get install -y python-pip && \
    apt-get install -y python3 && \
    apt-get install -y sqlmap && \
    apt-get install -y vim && \
    apt-get install -y wget && \
    apt-get install -y curl && \
    apt-get install -y nmap && \
    apt-get install -y nikto && \
    apt-get install -y git && \
    apt-get install -y dnsutils && \
    apt-get install -y iputils-ping && \
    apt-get install -y xprobe2 && \
    apt-get install -y whois

# Uniscan 
# https://www.thecurrent.ru/entry/kali-linux-poisk-uyazvimostej-na-sajte.html
RUN cd /home && \
    git clone https://github.com/szalek/Uniscan && \
    cd Uniscan && \
    export PERL_MM_USE_DEFAULT=1 && \
    ./install-modules.sh && \
    chmod +x /home/Uniscan/run.sh && \
    ln -sf /home/Uniscan/run.sh /usr/local/bin/uniscan

# passwords
RUN cd /home && \
    git clone https://github.com/szalek/get_passwords.git && \
    cd /home/get_passwords && \
    chmod +x get_passwords.sh && \
    ln -sf /home/get_passwords/get_passwords.sh /usr/local/bin/get_passwords

# dnsenum
RUN apt-get install -y build-essential && \
    apt-get install -y cpanminus && \
    git clone https://github.com/fwaeytens/dnsenum.git /home/dnsenum/ && \
    chmod +x /home/dnsenum/dnsenum.pl && \
    ln -s /home/dnsenum/dnsenum.pl /usr/bin/dnsenum && \
    cpanm String::Random && \
    cpanm Net::IP && \
    cpanm Net::DNS && \
    cpanm Net::Netmask && \
    cpanm XML::Writer

# Sn1per
# Sn1per is an automated scanner that can be used during a penetration test to enumerate and scan for vulnerabilities.
RUN git clone https://github.com/szalek/Sn1per.git /home/Sn1per/ && \
    chmod +x /home/Sn1per/install.sh && \
    cd /home/Sn1per/ && \
    /bin/bash install.sh

# knockpy
# Knockpy is a python tool designed to enumerate subdomains on a target domain through a wordlist.
RUN apt-get install -y python-dnspython && \
    cd home && \
    curl -LOk -o knock.tar.gz https://github.com/guelfoweb/knock/archive/4.1.0.tar.gz && \
    mv 4.1.0.tar.gz knock.tar.gz && \
    tar -xzf knock.tar.gz && \
    rm knock.tar.gz && \
    cd knock-4.1.0 && \
    python setup.py install

# haveibeenpwned
RUN git clone https://github.com/szalek/haveibeenpwned.git /home/haveibeenpwned && \
    chmod +x /home/haveibeenpwned/haveibeenpwned.sh && \
    ln -s /home/haveibeenpwned/haveibeenpwned.sh /usr/bin/haveibeenpwned

## exploit-database
#RUN git clone https://github.com/offensive-security/exploit-database.git /opt/exploit-database && \
#    ln -sf /opt/exploit-database/searchsploit /usr/local/bin/searchsploit

## wpscan
#RUN apt-get install -y libcurl4-openssl-dev libxml2 libxml2-dev libxslt1-dev ruby-dev build-essential libgmp-dev zlib1g-dev && \
#    git clone https://github.com/wpscanteam/wpscan.git && \
#    cd wpscan && \
#    gem install bundler && bundle install --without test && \
#    ln -sf /home/wpscan/wpscan.rb /usr/local/bin/wpscan

# ncrack
# Ncrack is a high-speed network authentication cracking tool.
RUN apt-get install -y libssl-dev && \
    cd /home && \
    wget -O ncrack.tar.gz https://github.com/nmap/ncrack/archive/v0.6.0.tar.gz && \
    tar -xzf ncrack.tar.gz && \
    cd ncrack-0.6.0 && \
    ./configure && \
    make && \
    make install && \
    cd /home && \
    rm ncrack.tar.gz

# whatweb
RUN apt-get install -y bsdmainutils ruby && \
    git clone https://github.com/urbanadventurer/WhatWeb.git /home/whatweb && \
    cd /home//whatweb/ && \
    make install