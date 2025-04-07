import React, { FC, useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, SectionList } from 'react-native';
import { useTheme } from '../../services/constants/ThemeContext';
import { createStyles } from './styles';
import { getBookings, getInitialDate } from '../../services/apis';
import { Booking, DateSection } from '../../services/types';
import BookingCard from '../../components/booking-card';
import BackButton from '../../components/back-button';

const ITEMS_PER_PAGE = 25;

const Home: FC = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const [dateSections, setDateSections] = useState<DateSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  
  const currentDateRef = useRef(getInitialDate());
  
  const loadBookings = async (currentPage: number) => {
    if (currentPage === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    
    try {
      const data = await getBookings(currentDateRef.current, ITEMS_PER_PAGE);
      
      if (currentPage === 1) {
        setDateSections(data);
      } else {
        setDateSections(prev => [...prev, ...data]);
      }
      
      // Update the current date reference for next page
      currentDateRef.current = new Date(currentDateRef.current);
      currentDateRef.current.setDate(currentDateRef.current.getDate() + ITEMS_PER_PAGE);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  
  const handleLoadMore = () => {
    if (!loadingMore) {
      setPage(prev => prev + 1);
      loadBookings(page + 1);
    }
  };
  
  useEffect(() => {
    loadBookings(1);
  }, []);
  
  const renderSectionHeader = ({ section }: { section: DateSection }) => (
    <View style={styles.dateHeader}>
      <Text style={styles.dateText}>{section.date}</Text>
    </View>
  );
  
  const renderBooking = ({ item }: { item: Booking }) => (
    <View style={styles.sectionContent}>
      <BookingCard
        sport={item.sport}
        startTime={item.startTime}
        endTime={item.endTime}
      />
    </View>
  );
  
  const renderFooter = () => {
    if (!loadingMore) return null;
    
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={styles.loadingText}>Loading more bookings...</Text>
      </View>
    );
  };
  
  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading bookings...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Home</Text>
      </View>
      
      <SectionList
        sections={dateSections}
        keyExtractor={(item) => item.id}
        renderItem={renderBooking}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default Home; 